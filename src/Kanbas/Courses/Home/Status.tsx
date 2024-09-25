import React, { useState } from 'react';

export default function CourseStatus() {
  const [isPublished, setIsPublished] = useState(false);

  const handlePublish = () => {
    setIsPublished(true);
  };

  const handleUnpublish = () => {
    setIsPublished(false);
  };

  return (
    <div id="wd-course-status">
      <h2>Course Status</h2>

      {/* Course status indicator */}
      <p>Status: <strong>{isPublished ? 'Published' : 'Unpublished'}</strong></p>

      {/* Buttons to publish/unpublish the course */}
      <button onClick={handleUnpublish} disabled={!isPublished}>Unpublish</button>
      <button onClick={handlePublish} disabled={isPublished}>Publish</button>

      {/* Additional buttons */}
      <button>View Course Notifications</button>
      <button>Course Analytics</button>
      <button>Edit Course Details</button>
    </div>
  );
}
