import React, { useState } from 'react';

export default function AssignmentEditor() {
  // You can use state to manage the form values if needed
  const [name, setName] = useState("A1 - ENV + HTML");
  const [description, setDescription] = useState(
    "The assignment is available online. Submit a link to the landing page of"
  );
  const [points, setPoints] = useState(100);
  const [dueDate, setDueDate] = useState("2024-12-01");
  const [submissionType, setSubmissionType] = useState("Online");

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input
        id="wd-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <label htmlFor="wd-description">Description</label>
      <textarea
        id="wd-description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br /><br />

      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input
                id="wd-points"
                type="number"
                value={points}
                onChange={(e) => setPoints(Number(e.target.value))}
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due Date</label>
            </td>
            <td>
              <input
                id="wd-due-date"
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select
                id="wd-submission-type"
                value={submissionType}
                onChange={(e) => setSubmissionType(e.target.value)}
              >
                <option value="Online">Online</option>
                <option value="In-Person">In-Person</option>
                <option value="Mixed">Mixed</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <br />

      {/* Buttons for saving or canceling */}
      <button onClick={() => alert("Assignment saved!")}>Save</button>
      <button onClick={() => alert("Editing canceled")}>Cancel</button>
    </div>
  );
}
