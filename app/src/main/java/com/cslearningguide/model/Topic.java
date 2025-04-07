package com.cslearningguide.model;

public class Topic {
    
    private int id;
    private String title;
    private String description;
    private String content;
    private int parentId;
    private int order;
    
    public Topic(int id, String title, String description) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.parentId = 0;
        this.order = 0;
    }
    
    public Topic(int id, String title, String description, String content, int parentId, int order) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.content = content;
        this.parentId = parentId;
        this.order = order;
    }
    
    public int getId() {
        return id;
    }
    
    public void setId(int id) {
        this.id = id;
    }
    
    public String getTitle() {
        return title;
    }
    
    public void setTitle(String title) {
        this.title = title;
    }
    
    public String getDescription() {
        return description;
    }
    
    public void setDescription(String description) {
        this.description = description;
    }
    
    public String getContent() {
        return content;
    }
    
    public void setContent(String content) {
        this.content = content;
    }
    
    public int getParentId() {
        return parentId;
    }
    
    public void setParentId(int parentId) {
        this.parentId = parentId;
    }
    
    public int getOrder() {
        return order;
    }
    
    public void setOrder(int order) {
        this.order = order;
    }
}
