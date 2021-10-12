class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {"picture": 200, "photo": 50, "item": 250};
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        if (!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())) {
            throw new Error("This article model is not included in this gallery!")
        }
        for (const el of this.listOfArticles) {
            if (el['articleName'] === articleName && el['articleModel'] === articleModel.toLowerCase()) {
                el['quantity'] += 1;
                return `Successfully added article ${articleName} with a new quantity- ${el['quantity']}.`
            }
        }
        this.listOfArticles.push({articleModel: articleModel.toLowerCase(), articleName, quantity});
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        for (const guest of this.guests) {
            if (guest['guestName'] === guestName) {
                throw new Error(`${guestName} has already been invited.`);
            }
        }
        let mapper = {
            Vip: 500,
            Middle: 250
        }
        let points = mapper[personality];
        if (points === undefined) {
            points = 50;
        }
        this.guests.push({guestName, points, purchaseArticle: 0});
        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        for (const el of this.listOfArticles) {
            if (el['articleName'] === articleName && el['articleModel'] === articleModel) {
                if (el['quantity'] === 0) {
                    return `The ${articleName} is not available.`;
                }
                let currentGuest = undefined;
                for (const guest of this.guests) {
                    if (guest['guestName'] === guestName) {
                        currentGuest = guest;
                    }
                }
                if (currentGuest === undefined) {
                    return 'This guest is not invited.';
                }
                let requiredPoints = this.possibleArticles[articleModel];
                if (currentGuest['points'] >= requiredPoints) {
                    currentGuest['points'] -= requiredPoints;
                    currentGuest['purchaseArticle'] += 1;
                    let currentArticle = undefined
                    for (const art of this.listOfArticles) {
                        if (art['articleModel'] === articleModel) {
                            currentArticle = art;
                        }
                    }
                    currentArticle['quantity'] -= 1;
                    return `${guestName} successfully purchased the article worth ${requiredPoints} points.`;
                } else {
                    return 'You need to more points to purchase the article.';
                }
            }
        }
        throw new Error('This article is not found.');
    }

    showGalleryInfo(criteria) {
        let result = '';
        if (criteria === 'article') {
            result += "Articles information:\n";
            for (const art of this.listOfArticles) {
                result += `${art['articleModel']} - ${art['articleName']} - ${art['quantity']}\n`;
            }
            return result.trimRight();
        } else if (criteria === 'guest') {
            result += "Guests information:\n";
            for (const guest of this.guests) {
                result += `${guest['guestName']} - ${guest['purchaseArticle']}\n`;
            }
            return result.trimRight();
        }
    }
}

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// artGallery.buyArticle('picture', 'Mona Liza', 'John');
// artGallery.buyArticle('item', 'Ancient vase', 'Peter');
// console.log(artGallery.showGalleryInfo('article'));
// console.log(artGallery.showGalleryInfo('guest'));