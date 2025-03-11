'use strict'

const subtopicListCareer = document.querySelector(".subtopic-list-career");
const subtopicListUni = document.querySelector(".subtopic-list-uni");

const topicOne = document.querySelector(".topic-1");
const topicTwo = document.querySelector(".topic-2");
const topicThree = document.querySelector(".topic-3");

topicOne.addEventListener("click", function openFirstTopic () {
    if (subtopicListCareer.classList.contains("hidden")) {
        subtopicListCareer.classList.remove("hidden");
    } else {
        subtopicListCareer.classList.add("hidden");
    }
});