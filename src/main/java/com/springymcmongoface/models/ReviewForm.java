package com.springymcmongoface.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "springymcmongofacecollection")
public class ReviewForm {
    @Id
    private String id;
    private String name;
    private String changeOrder;
    private String installDate;

    public ReviewForm(String name, String changeOrder, String installDate)
    {
        this.name = name;
        this.changeOrder = changeOrder;
        this.installDate = installDate;

    }

    public String getId()
    {
        return id;
    }

    public void setId(String id)
    {
        this.id = id;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getChangeOrder()
    {
        return changeOrder;
    }

    public void setChangeOrder(String changeOrder)
    {
        this.changeOrder = changeOrder;
    }

    public String getInstallDate()
    {
        return installDate;
    }

    public void setInstallDate(String installDate)
    {
        this.installDate = installDate;
    }
}