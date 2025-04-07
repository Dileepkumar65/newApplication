package com.cslearningguide;

import android.content.Intent;
import android.database.Cursor;
import android.os.Bundle;
import android.text.Html;
import android.view.MenuItem;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.cslearningguide.adapter.SubTopicAdapter;
import com.cslearningguide.data.TopicContract;
import com.cslearningguide.model.SubTopic;

import java.util.ArrayList;
import java.util.List;

public class TopicActivity extends AppCompatActivity implements SubTopicAdapter.SubTopicClickListener {

    private TextView topicContentText;
    private RecyclerView subtopicsRecyclerView;
    private SubTopicAdapter adapter;
    private List<SubTopic> subtopicList;
    private int topicId;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_topic);
        
        // Get topic info from intent
        topicId = getIntent().getIntExtra("TOPIC_ID", 0);
        String topicTitle = getIntent().getStringExtra("TOPIC_TITLE");
        
        // Setup ActionBar
        getSupportActionBar().setTitle(topicTitle);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        
        topicContentText = findViewById(R.id.topicContentText);
        subtopicsRecyclerView = findViewById(R.id.subtopicsRecyclerView);
        subtopicsRecyclerView.setLayoutManager(new LinearLayoutManager(this));
        
        subtopicList = new ArrayList<>();
        adapter = new SubTopicAdapter(this, subtopicList, this);
        subtopicsRecyclerView.setAdapter(adapter);
        
        loadTopicContent();
        loadSubtopics();
    }
    
    private void loadTopicContent() {
        Cursor cursor = getContentResolver().query(
                TopicContract.TopicEntry.CONTENT_URI,
                null,
                TopicContract.TopicEntry._ID + "=?",
                new String[]{String.valueOf(topicId)},
                null
        );
        
        if (cursor != null && cursor.moveToFirst()) {
            String description = cursor.getString(cursor.getColumnIndex(TopicContract.TopicEntry.COLUMN_DESCRIPTION));
            String content = cursor.getString(cursor.getColumnIndex(TopicContract.TopicEntry.COLUMN_CONTENT));
            
            if (content != null && !content.isEmpty()) {
                topicContentText.setText(Html.fromHtml(content));
            } else {
                topicContentText.setText(description);
            }
            
            cursor.close();
        }
    }
    
    private void loadSubtopics() {
        subtopicList.clear();
        
        Cursor cursor = getContentResolver().query(
                TopicContract.TopicEntry.CONTENT_URI,
                null,
                TopicContract.TopicEntry.COLUMN_PARENT_ID + "=?",
                new String[]{String.valueOf(topicId)},
                TopicContract.TopicEntry.COLUMN_ORDER + " ASC"
        );
        
        if (cursor != null && cursor.moveToFirst()) {
            do {
                int id = cursor.getInt(cursor.getColumnIndex(TopicContract.TopicEntry._ID));
                String title = cursor.getString(cursor.getColumnIndex(TopicContract.TopicEntry.COLUMN_TITLE));
                String description = cursor.getString(cursor.getColumnIndex(TopicContract.TopicEntry.COLUMN_DESCRIPTION));
                
                SubTopic subtopic = new SubTopic(id, title, description);
                subtopicList.add(subtopic);
            } while (cursor.moveToNext());
            
            cursor.close();
        }
        
        adapter.notifyDataSetChanged();
    }
    
    @Override
    public void onSubTopicClick(SubTopic subtopic) {
        Intent intent = new Intent(this, TopicActivity.class);
        intent.putExtra("TOPIC_ID", subtopic.getId());
        intent.putExtra("TOPIC_TITLE", subtopic.getTitle());
        startActivity(intent);
    }
    
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case android.R.id.home:
                onBackPressed();
                return true;
        }
        return super.onOptionsItemSelected(item);
    }
}
