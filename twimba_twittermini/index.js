import { tweetsData } from "./data.js";
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
const feed = document.getElementById("feed")
const tweetInput = document.getElementById('input')

function newTweetClicks(){
    if(tweetInput.value){
        tweetsData.unshift({
            handle: `@Scrimba`,
            profilePic: `images/scrimbalogo.png`,
            likes: 0,
            retweets: 0,
            tweetText: tweetInput.value,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            uuid: uuidv4()
        })
        render()
    }
    tweetInput.value = '' 
}


//Listening for any clicks in the document.
document.addEventListener('click', function(e){
    if(e.target.dataset.like){
        handleLikeClicks(e.target.dataset.like)
    } else if(e.target.dataset.reply){
        handleReplyClicks(e.target.dataset.reply)
    } else if(e.target.dataset.retweet){
        handleRetweetClicks(e.target.dataset.retweet)
    } else if(e.target.id === 'tweet-btn'){
        newTweetClicks()
    }
})
//Runs the function handleReplyClicks() if dataset.reply is clicked.
function handleReplyClicks(tweetId){
    document.getElementById(`replies-${tweetId}`).classList.toggle('hidden')
}

//Runs the function handleLikeClicks() if dataset.like is clicked.
function handleLikeClicks(tweetId){
    const targetObject = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]

    if(targetObject.isLiked){
        targetObject.likes -- 
    } else {
        targetObject.likes ++ 
    }
    targetObject.isLiked = !targetObject.isLiked
    render()
}

//Runs the function handleRetweetClicks() if dataset.retweet is clicked.
function handleRetweetClicks(tweetId){
    const targetObject = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]

    if(targetObject.isRetweeted){
        targetObject.retweets -- 
    } else {
        targetObject.retweets ++ 
    }
    targetObject.isRetweeted = !targetObject.isRetweeted
    render()
}

//Access Initial Data.
function getFeedData(){
    let feedHtml = ''
    tweetsData.forEach(function(tweet){
        let likeIconClass = ''
        if(tweet.isLiked){
            likeIconClass = 'liked'
        }

        let retweetIconClass = ''
        if(tweet.isRetweeted){
            retweetIconClass = 'retweeted'
        }

        let repliesHtml = ''
        
        if(tweet.replies.length > 0){
            tweet.replies.forEach(function(reply){
                repliesHtml+=`
<div class="tweet-reply">
    <div class="tweet-inner">
        <img src="${reply.profilePic}" class="profile-pic">
            <div>
                <p class="handle">${reply.handle}</p>
                <p class="tweet-text">${reply.tweetText}</p>
            </div>
        </div>
</div>
`
            })
        }
        
        feedHtml += `
        <div class="tweet">
        <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    <i class="fa-regular fa-comment-dots" data-reply="${tweet.uuid}" ></i>
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-heart ${likeIconClass}" data-like="${tweet.uuid}"></i>
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-retweet ${retweetIconClass}" data-retweet="${tweet.uuid}"></i>
                    ${tweet.retweets}
                </span>
            </div>   
        </div>            
    </div>
        <div class="hidden" id="replies-${tweet.uuid}">
        ${repliesHtml}
    </div> 
</div>`
    })
    return feedHtml
}

//Render Initial Data.
function render(){
    feed.innerHTML = getFeedData()
}

render()