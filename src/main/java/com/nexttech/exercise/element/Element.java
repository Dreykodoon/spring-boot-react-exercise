package com.nexttech.exercise.element;

import javax.persistence.*;

@Entity
@Table(name = "CONTENT")
@NamedQuery(query = "select e from Element e", name = "query_find_all_elements")
public class Element {

    @Id
    private Long id;
    private String name;
    private String title;
    private String description;
    private String type;
    private String mimetype;
    private String url;
    @Column(name = "parent_id")
    private String parentId;

    public Element(Long id, String name, String title, String description, String type, String mimetype, String url, String parentId) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.description = description;
        this.type = type;
        this.mimetype = mimetype;
        this.url = url;
        this.parentId = parentId;
    }

    public Element() {}

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getMimetype() {
        return mimetype;
    }

    public void setMimetype(String mimetype) {
        this.mimetype = mimetype;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getParentId() {
        return parentId;
    }

    public void setParentId(String parentId) {
        this.parentId = parentId;
    }
}
