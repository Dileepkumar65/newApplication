package com.cslearningguide;

import android.content.Intent;
import android.database.Cursor;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.MenuItem;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.cslearningguide.adapter.TopicAdapter;
import com.cslearningguide.data.TopicContract;
import com.cslearningguide.model.Topic;

import java.util.ArrayList;
import java.util.List;

public class SearchActivity extends AppCompatActivity implements TopicAdapter.TopicClickListener {

    private EditText searchEditText;
    private RecyclerView searchResultsRecyclerView;
    private TextView noResultsText;
    private TopicAdapter adapter;
    private List<Topic> searchResults;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_search);
        
        getSupportActionBar().setTitle("Search Topics");
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        
        searchEditText = findViewById(R.id.searchEditText);
        searchResultsRecyclerView = findViewById(R.id.searchResultsRecyclerView);
        noResultsText = findViewById(R.id.noResultsText);
        
        searchResultsRecyclerView.setLayoutManager(new LinearLayoutManager(this));
        
        searchResults = new ArrayList<>();
        adapter = new TopicAdapter(this, searchResults, this);
        searchResultsRecyclerView.setAdapter(adapter);
        
        // Set up text change listener
        searchEditText.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {
                // Not used
            }

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                performSearch(s.toString());
            }

            @Override
            public void afterTextChanged(Editable s) {
                // Not used
            }
        });
    }
    
    private void performSearch(String query) {
        searchResults.clear();
        
        if (query.length() < 3) {
            noResultsText.setText("Enter at least 3 characters to search");
            noResultsText.setVisibility(View.VISIBLE);
            searchResultsRecyclerView.setVisibility(View.GONE);
            return;
        }
        
        String selection = TopicContract.TopicEntry.COLUMN_TITLE + " LIKE ? OR " +
                TopicContract.TopicEntry.COLUMN_DESCRIPTION + " LIKE ? OR " +
                TopicContract.TopicEntry.COLUMN_CONTENT + " LIKE ?";
        String[] selectionArgs = new String[]{"%" + query + "%", "%" + query + "%", "%" + query + "%"};
        
        Cursor cursor = getContentResolver().query(
                TopicContract.TopicEntry.CONTENT_URI,
                null,
                selection,
                selectionArgs,
                null
        );
        
        if (cursor != null && cursor.moveToFirst()) {
            do {
                int id = cursor.getInt(cursor.getColumnIndex(TopicContract.TopicEntry._ID));
                String title = cursor.getString(cursor.getColumnIndex(TopicContract.TopicEntry.COLUMN_TITLE));
                String description = cursor.getString(cursor.getColumnIndex(TopicContract.TopicEntry.COLUMN_DESCRIPTION));
                
                Topic topic = new Topic(id, title, description);
                searchResults.add(topic);
            } while (cursor.moveToNext());
            
            cursor.close();
        }
        
        adapter.notifyDataSetChanged();
        
        if (searchResults.isEmpty()) {
            noResultsText.setText("No results found for '" + query + "'");
            noResultsText.setVisibility(View.VISIBLE);
            searchResultsRecyclerView.setVisibility(View.GONE);
        } else {
            noResultsText.setVisibility(View.GONE);
            searchResultsRecyclerView.setVisibility(View.VISIBLE);
        }
    }
    
    @Override
    public void onTopicClick(Topic topic) {
        Intent intent = new Intent(this, TopicActivity.class);
        intent.putExtra("TOPIC_ID", topic.getId());
        intent.putExtra("TOPIC_TITLE", topic.getTitle());
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
