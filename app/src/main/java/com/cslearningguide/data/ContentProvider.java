package com.cslearningguide.data;

import android.content.ContentProvider;
import android.content.ContentUris;
import android.content.ContentValues;
import android.content.UriMatcher;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.net.Uri;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.cslearningguide.data.TopicContract.TopicEntry;

public class ContentProvider extends ContentProvider {
    
    public static final int TOPICS = 100;
    public static final int TOPIC_ID = 101;
    
    private static final UriMatcher sUriMatcher = new UriMatcher(UriMatcher.NO_MATCH);
    
    static {
        sUriMatcher.addURI(TopicContract.CONTENT_AUTHORITY, TopicContract.PATH_TOPICS, TOPICS);
        sUriMatcher.addURI(TopicContract.CONTENT_AUTHORITY, TopicContract.PATH_TOPICS + "/#", TOPIC_ID);
    }
    
    private DatabaseHelper mDbHelper;
    
    @Override
    public boolean onCreate() {
        mDbHelper = new DatabaseHelper(getContext());
        return true;
    }
    
    @Nullable
    @Override
    public Cursor query(@NonNull Uri uri, @Nullable String[] projection, @Nullable String selection, 
                        @Nullable String[] selectionArgs, @Nullable String sortOrder) {
        
        SQLiteDatabase database = mDbHelper.getReadableDatabase();
        Cursor cursor;
        
        int match = sUriMatcher.match(uri);
        switch (match) {
            case TOPICS:
                cursor = database.query(TopicEntry.TABLE_NAME, projection, selection, selectionArgs,
                        null, null, sortOrder);
                break;
            case TOPIC_ID:
                selection = TopicEntry._ID + "=?";
                selectionArgs = new String[] { String.valueOf(ContentUris.parseId(uri)) };
                cursor = database.query(TopicEntry.TABLE_NAME, projection, selection, selectionArgs,
                        null, null, sortOrder);
                break;
            default:
                throw new IllegalArgumentException("Cannot query unknown URI " + uri);
        }
        
        cursor.setNotificationUri(getContext().getContentResolver(), uri);
        return cursor;
    }
    
    @Nullable
    @Override
    public String getType(@NonNull Uri uri) {
        final int match = sUriMatcher.match(uri);
        switch (match) {
            case TOPICS:
                return TopicEntry.CONTENT_LIST_TYPE;
            case TOPIC_ID:
                return TopicEntry.CONTENT_ITEM_TYPE;
            default:
                throw new IllegalStateException("Unknown URI " + uri + " with match " + match);
        }
    }
    
    @Nullable
    @Override
    public Uri insert(@NonNull Uri uri, @Nullable ContentValues values) {
        final int match = sUriMatcher.match(uri);
        switch (match) {
            case TOPICS:
                return insertTopic(uri, values);
            default:
                throw new IllegalArgumentException("Insertion is not supported for " + uri);
        }
    }
    
    private Uri insertTopic(Uri uri, ContentValues values) {
        SQLiteDatabase database = mDbHelper.getWritableDatabase();
        long id = database.insert(TopicEntry.TABLE_NAME, null, values);
        
        if (id == -1) {
            Log.e("ContentProvider", "Failed to insert row for " + uri);
            return null;
        }
        
        getContext().getContentResolver().notifyChange(uri, null);
        return ContentUris.withAppendedId(uri, id);
    }
    
    @Override
    public int delete(@NonNull Uri uri, @Nullable String selection, @Nullable String[] selectionArgs) {
        SQLiteDatabase database = mDbHelper.getWritableDatabase();
        int rowsDeleted;
        
        final int match = sUriMatcher.match(uri);
        switch (match) {
            case TOPICS:
                rowsDeleted = database.delete(TopicEntry.TABLE_NAME, selection, selectionArgs);
                break;
            case TOPIC_ID:
                selection = TopicEntry._ID + "=?";
                selectionArgs = new String[] { String.valueOf(ContentUris.parseId(uri)) };
                rowsDeleted = database.delete(TopicEntry.TABLE_NAME, selection, selectionArgs);
                break;
            default:
                throw new IllegalArgumentException("Deletion is not supported for " + uri);
        }
        
        if (rowsDeleted != 0) {
            getContext().getContentResolver().notifyChange(uri, null);
        }
        
        return rowsDeleted;
    }
    
    @Override
    public int update(@NonNull Uri uri, @Nullable ContentValues values, @Nullable String selection, 
                      @Nullable String[] selectionArgs) {
        
        final int match = sUriMatcher.match(uri);
        switch (match) {
            case TOPICS:
                return updateTopic(uri, values, selection, selectionArgs);
            case TOPIC_ID:
                selection = TopicEntry._ID + "=?";
                selectionArgs = new String[] { String.valueOf(ContentUris.parseId(uri)) };
                return updateTopic(uri, values, selection, selectionArgs);
            default:
                throw new IllegalArgumentException("Update is not supported for " + uri);
        }
    }
    
    private int updateTopic(Uri uri, ContentValues values, String selection, String[] selectionArgs) {
        if (values.size() == 0) {
            return 0;
        }
        
        SQLiteDatabase database = mDbHelper.getWritableDatabase();
        int rowsUpdated = database.update(TopicEntry.TABLE_NAME, values, selection, selectionArgs);
        
        if (rowsUpdated != 0) {
            getContext().getContentResolver().notifyChange(uri, null);
        }
        
        return rowsUpdated;
    }
}
