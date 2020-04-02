// Increment Likes:
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

// Add Comment:
export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

// Remove Comment:
export function removeComment(postId, i) {
    return {
        type: 'REMOVE_COMMENT',
        i,
        postId
    }
}
// Note: routing history will be handled by react - router for us(i.e.no need to implement manually)
