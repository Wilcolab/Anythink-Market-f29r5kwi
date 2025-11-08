/**
 * @module routes/api/comments
 * @description
 * Express router that provides CRUD endpoints for the Comment mongoose model.
 *
 * This router exposes the following routes (mounted at /api/comments or similar):
 *  - GET    /             => List all comments
 *  - POST   /             => Create a new comment
 *  - GET    /:commentId   => Get a single comment by ID
 *  - PUT    /:commentId   => Update a comment by ID
 *  - DELETE /:commentId   => Delete a comment by ID
 *
 * The router uses the mongoose model named "Comment" (mongoose.model('Comment')).
 *
 * Error handling conventions used by these endpoints:
 *  - 200 OK: successful retrieval, update, or deletion (delete returns a success message)
 *  - 201 Created: successful creation returns the created comment
 *  - 400 Bad Request: invalid input (e.g., invalid MongoDB ObjectId, validation errors on create)
 *  - 404 Not Found: requested comment does not exist
 *  - 500 Internal Server Error: unexpected errors (database failures, etc.)
 *
 * Route details:
 *
 * GET /
 *  - Description: Retrieve all comments.
 *  - Request: none
 *  - Response:
 *      200: Array<Object> - array of comment documents
 *      500: { error: string } - failed to fetch comments
 *
 * POST /
 *  - Description: Create a new comment.
 *  - Request body: Object matching the Comment mongoose schema
 *  - Response:
 *      201: Object - created comment document
 *      400: { error: string } - failed to create comment (validation or bad input)
 *
 * GET /:commentId
 *  - Description: Retrieve a single comment by its MongoDB ObjectId.
 *  - Path params:
 *      commentId: string - MongoDB ObjectId of the comment
 *  - Response:
 *      200: Object - the comment document
 *      400: { error: string } - invalid comment ID
 *      404: { error: string } - comment not found
 *      500: { error: string } - failed to fetch comment
 *
 * PUT /:commentId
 *  - Description: Update an existing comment by its ObjectId. Uses findByIdAndUpdate with
 *                 { new: true, runValidators: true } so validators run on update and the
 *                 returned document is the updated one.
 *  - Path params:
 *      commentId: string - MongoDB ObjectId of the comment
 *  - Request body: Partial or full object matching the Comment schema
 *  - Response:
 *      200: Object - updated comment document
 *      400: { error: string } - invalid comment ID (or invalid input schema depending on validation)
 *      404: { error: string } - comment not found
 *      500: { error: string } - failed to update comment
 *
 * DELETE /:commentId
 *  - Description: Delete a comment by its ObjectId.
 *  - Path params:
 *      commentId: string - MongoDB ObjectId of the comment
 *  - Response:
 *      200: { message: string } - deletion success message
 *      404: { error: string } - comment not found
 *      500: { error: string } - failed to delete comment
 *
 * Export:
 *  - module.exports = router (an Express Router instance)
 *
 * Notes:
 *  - The shape of comment objects and allowed fields are determined by the Comment mongoose schema.
 *  - Consumers should ensure request bodies conform to that schema to avoid validation errors.
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

// Hey GitHub Copilot, can you help me implement the CRUD operations for comments in this Express router?
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

// add another endpoint for deleting a comment.
router.delete("/:commentId", (req, res, next) => {
  const { commentId } = req.params;
  Comment.findByIdAndDelete(commentId)
    .then((deletedComment) => {
      if (!deletedComment) {
        return res.status(404).json({ error: "Comment not found" });
      }
      res.json({ message: "Comment deleted successfully" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Failed to delete comment" });
    });
});
router.post("/", async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json(comment);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Failed to create comment" });
  }
});

router.get("/:commentId", async (req, res) => {
  try {
    const { commentId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(commentId)) {
      return res.status(400).json({ error: "Invalid comment ID" });
    }
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json(comment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch comment" });
  }
});

router.put("/:commentId", async (req, res) => {
  try {
    const { commentId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(commentId)) {
      return res.status(400).json({ error: "Invalid comment ID" });
    }
    const updated = await Comment.findByIdAndUpdate(commentId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update comment" });
  }
});