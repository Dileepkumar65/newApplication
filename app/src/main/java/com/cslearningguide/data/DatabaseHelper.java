package com.cslearningguide.data;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import com.cslearningguide.data.TopicContract.TopicEntry;

public class DatabaseHelper extends SQLiteOpenHelper {

    private static final String DATABASE_NAME = "cslearningguide.db";
    private static final int DATABASE_VERSION = 1;

    public DatabaseHelper(Context context) {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        final String SQL_CREATE_TOPICS_TABLE = "CREATE TABLE " + TopicEntry.TABLE_NAME + " (" +
                TopicEntry._ID + " INTEGER PRIMARY KEY AUTOINCREMENT, " +
                TopicEntry.COLUMN_TITLE + " TEXT NOT NULL, " +
                TopicEntry.COLUMN_DESCRIPTION + " TEXT NOT NULL, " +
                TopicEntry.COLUMN_CONTENT + " TEXT, " +
                TopicEntry.COLUMN_PARENT_ID + " INTEGER NOT NULL DEFAULT 0, " +
                TopicEntry.COLUMN_ORDER + " INTEGER NOT NULL DEFAULT 0" +
                ");";

        db.execSQL(SQL_CREATE_TOPICS_TABLE);
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        // For simplicity, drop tables and recreate them
        db.execSQL("DROP TABLE IF EXISTS " + TopicEntry.TABLE_NAME);
        onCreate(db);
    }
}
