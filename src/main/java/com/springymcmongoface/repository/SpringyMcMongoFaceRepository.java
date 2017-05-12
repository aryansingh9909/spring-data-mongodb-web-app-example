package com.springymcmongoface.repository;

import com.springymcmongoface.models.ReviewForm;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpringyMcMongoFaceRepository extends MongoRepository<ReviewForm, String> {

}