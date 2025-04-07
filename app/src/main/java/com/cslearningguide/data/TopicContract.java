package com.cslearningguide.data;

import android.content.ContentResolver;
import android.net.Uri;
import android.provider.BaseColumns;

public final class TopicContract {
    
    private TopicContract() {}
    
    public static final String CONTENT_AUTHORITY = "com.cslearningguide";
    public static final Uri BASE_CONTENT_URI = Uri.parse("content://" + CONTENT_AUTHORITY);
    public static final String PATH_TOPICS = "topics";
    
    public static final class TopicEntry implements BaseColumns {
        public static final Uri CONTENT_URI = BASE_CONTENT_URI.buildUpon()
                .appendPath(PATH_TOPICS).build();
        
        public static final String CONTENT_LIST_TYPE =
                ContentResolver.CURSOR_DIR_BASE_TYPE + "/" + CONTENT_AUTHORITY + "/" + PATH_TOPICS;
        
        public static final String CONTENT_ITEM_TYPE =
                ContentResolver.CURSOR_ITEM_BASE_TYPE + "/" + CONTENT_AUTHORITY + "/" + PATH_TOPICS;
        
        public static final String TABLE_NAME = "topics";
        
        public static final String _ID = BaseColumns._ID;
        public static final String COLUMN_TITLE = "title";
        public static final String COLUMN_DESCRIPTION = "description";
        public static final String COLUMN_CONTENT = "content";
        public static final String COLUMN_PARENT_ID = "parent_id";
        public static final String COLUMN_ORDER = "display_order";
    }
}
