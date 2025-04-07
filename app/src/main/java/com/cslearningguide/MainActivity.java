package com.cslearningguide;

import android.content.Intent;
import android.database.Cursor;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.SearchView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.cslearningguide.adapter.TopicAdapter;
import com.cslearningguide.data.TopicContract;
import com.cslearningguide.model.Topic;
import com.cslearningguide.utils.DataInitializer;
import com.google.android.material.floatingactionbutton.FloatingActionButton;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity implements TopicAdapter.TopicClickListener {

    private RecyclerView recyclerView;
    private TopicAdapter adapter;
    private List<Topic> topicList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        getSupportActionBar().setTitle("CS Learning Guide");
        
        recyclerView = findViewById(R.id.recyclerView);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        
        topicList = new ArrayList<>();
        adapter = new TopicAdapter(this, topicList, this);
        recyclerView.setAdapter(adapter);
        
        // Initialize database with content if first launch
        DataInitializer dataInitializer = new DataInitializer(this);
        dataInitializer.initializeDataIfNeeded();
        
        loadTopics();
        
        FloatingActionButton searchFab = findViewById(R.id.searchFab);
        searchFab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, SearchActivity.class);
                startActivity(intent);
            }
        });
    }
    
    private void loadTopics() {
        topicList.clear();
        
        Cursor cursor = getContentResolver().query(
                TopicContract.TopicEntry.CONTENT_URI,
                null,
                null,
                null,
                TopicContract.TopicEntry.COLUMN_ORDER + " ASC"
        );
        
        if (cursor != null && cursor.moveToFirst()) {
            do {
                int id = cursor.getInt(cursor.getColumnIndex(TopicContract.TopicEntry._ID));
                String title = cursor.getString(cursor.getColumnIndex(TopicContract.TopicEntry.COLUMN_TITLE));
                String description = cursor.getString(cursor.getColumnIndex(TopicContract.TopicEntry.COLUMN_DESCRIPTION));
                int parentId = cursor.getInt(cursor.getColumnIndex(TopicContract.TopicEntry.COLUMN_PARENT_ID));
                
                // Only add parent topics (parentId = 0) to the main list
                if (parentId == 0) {
                    Topic topic = new Topic(id, title, description);
                    topicList.add(topic);
                }
            } while (cursor.moveToNext());
            
            cursor.close();
        }
        
        adapter.notifyDataSetChanged();
    }
    
    @Override
    public void onTopicClick(Topic topic) {
        Intent intent = new Intent(this, TopicActivity.class);
        intent.putExtra("TOPIC_ID", topic.getId());
        intent.putExtra("TOPIC_TITLE", topic.getTitle());
        startActivity(intent);
    }
    
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.main_menu, menu);
        return true;
    }
    
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int id = item.getItemId();
        
        if (id == R.id.action_about) {
            Intent intent = new Intent(this, AboutActivity.class);
            startActivity(intent);
            return true;
        }
        
        return super.onOptionsItemSelected(item);
    }
}
