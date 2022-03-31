const express = require('express');
const router = express.Router();


const UserController = require('../controllers/UserController')
const BookController = require('../controllers/BookController')
const middleware = require('../middleware/tokenAuth')
const reviewController = require('../controllers/reviewContoller')


//POST FOR USER
router.post('/register', UserController.createUser)

//POST FOR LOGIN USER
router.post('/login', UserController.loginUser)

//POST FOR BOOK
router.post('/books', middleware.mid1, BookController.createBook)

// get Book
router.get('/books', middleware.mid1, BookController.getBook)

//get books with all reviews
router.get("/books/:bookId", middleware.mid1, BookController.getBookWithreview)

//update Book
router.put('/books/:bookId', middleware.mid1, BookController.updateBook)

//delete book by bookId
router.delete('/books/:bookId', middleware.mid1, BookController.deleteById)

//add review

router.post('/books/:bookId', reviewController.addReview)

//Update review
router.put('/books/:bookId/review/:reviewId', reviewController.updateReview)

//delete
router.delete('/books/:bookId/review/:reviewId', reviewController.deleteReview)


module.exports = router;