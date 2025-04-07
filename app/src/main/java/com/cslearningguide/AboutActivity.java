package com.cslearningguide;

import android.os.Bundle;
import android.text.Html;
import android.text.method.LinkMovementMethod;
import android.view.MenuItem;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class AboutActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_about);
        
        getSupportActionBar().setTitle("About");
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        
        TextView aboutContentTextView = findViewById(R.id.aboutContentTextView);
        
        String aboutContent = "<h2>CS Learning Guide</h2>" +
                "<p>Version 1.0</p>" +
                "<p>This application provides a comprehensive learning resource covering all aspects of computer science, " +
                "from the lowest level of computation devices to the highest level user applications.</p>" +
                "<h3>Key Features:</h3>" +
                "<ul>" +
                "<li>Computer Architecture</li>" +
                "<li>Programming Languages</li>" +
                "<li>Operating Systems</li>" +
                "<li>Embedded Systems</li>" +
                "<li>Networking</li>" +
                "<li>User Interfaces and Applications</li>" +
                "<li>Machine Learning and AI</li>" +
                "</ul>" +
                "<h3>Developer Information</h3>" +
                "<p>Developed by: Dileep Kumar Singu</p>" +
                "<p>© 2023 All rights reserved.</p>" +
                "<p>This application is designed to help computer science students and professionals " +
                "learn and understand complex CS concepts through structured content and resources.</p>";
        
        aboutContentTextView.setText(Html.fromHtml(aboutContent));
        aboutContentTextView.setMovementMethod(LinkMovementMethod.getInstance());
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
