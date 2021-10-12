class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
        this._commentsId = 1;
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        }
        if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`
        }
        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
    }

    like(username) {
        if (username === this.creator) {
            throw new Error('You can\'t like your own story!');
        }
        if (this._likes.includes(username)) {
            throw new Error('You can\'t like the same story twice!');
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error('You can\'t dislike this story!');
        }
        let index = this._likes.indexOf(username);
        this._likes.splice(index, 1);
        return `${username} disliked ${this.title}`
    }

    comment(username, content, id) {
        function checkForComment(id) {
            if (id === undefined) {
                return false;
            }
            for (const comment of this._comments) {
                if (comment.id === id) {
                    return comment;
                }
            }
            return false;
        }

        let currentComment = checkForComment.call(this, id);
        if (currentComment === false) {
            this._comments.push({
                id: this._commentsId,
                username,
                content,
                replies: [],
                repliesId: this._commentsId + 0.1
            })
            this._commentsId++;
            return `${username} commented on ${this.title}`
        }

        currentComment.replies.push({id: currentComment.repliesId.toFixed(1), username, content})
        currentComment.repliesId += 0.1;
        return 'You replied successfully'
    }

    toString(sortingType) {
        let result = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`;
        let commentsCopy = JSON.parse(JSON.stringify(this._comments));
        if (sortingType === 'asc') {
            commentsCopy.sort((a, b) => a.id - b.id);
            for (const obj of commentsCopy) {
                obj.replies.sort((a, b) => a.id - b.id)
            }
        } else if (sortingType === 'desc') {
            commentsCopy.sort((a, b) => b.id - a.id);
            for (const obj of commentsCopy) {
                obj.replies.sort((a, b) => b.id - a.id)
            }
        } else if (sortingType === 'username') {
            commentsCopy.sort((a, b) => a.username.localeCompare(b.username));
            for (const obj of commentsCopy) {
                obj.replies.sort((a, b) => a.username.localeCompare(b.username))
            }
        }
        if (commentsCopy.length > 0) {
            for (const comment of commentsCopy) {
                result += `-- ${comment.id}. ${comment.username}: ${comment.content}\n`;
                if (comment.replies.length > 0) {
                    for (const reply of comment.replies) {
                        result += `--- ${reply.id}. ${reply.username}: ${reply.content}\n`
                    }
                }
            }
        }
        return result.trimRight();
    }
}

// let art = new Story("My Story", "Anny");
// art.like("John");
// console.log(art.likes);
// art.dislike("John");
// console.log(art.likes);
// art.comment("Sammy", "Some Content");
// console.log(art.comment("Ammy", "New Content"));
// art.comment("Zane", "Reply", 1);
// art.comment("Jessy", "Nice :)");
// console.log(art.comment("SAmmy", "Reply@", 1));
// console.log()
// console.log(art.toString('username'));
// console.log()
// art.like("Zane");
// console.log(art.toString('desc'));