import React, { useState } from 'react';

export default function CourseStatus() {
  // You can add state management if needed for publish/unpublish or other actions
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

      {/* Display current course status */}
      <p>Status: {isPublished ? "Published" : "Unpublished"}</p>

      {/* Buttons to publish or unpublish the course */}
      <button onClick={handleUnpublish} disabled={!isPublished}>Unpublish</button>
      <button onClick={handlePublish} disabled={isPublished}>Publish</button>

      {/* Additional course status info */}
      <p>Enrolled Students: 25</p>
      <p>Assignments: 3 Pending Grading</p>

      {/* Button to view notifications */}
      <button>View Course Notifications</button>
    </div>
  );
}
