const cookieName = 'questionId';
const DEFAULT_QUESTION_ID = '1';

export function setQuestionId(id) {
    document.cookie = cookieName + '=' + id;
}

export function getQuestionId() {
    const cookies = document.cookie.split(';');
    const questionIdEntry = cookies.find(cookieStr => cookieStr.includes(cookieName));
    if (questionIdEntry) {
        return questionIdEntry.split('=')[1] || DEFAULT_QUESTION_ID;
    }
    return DEFAULT_QUESTION_ID;
}

export function clearQuestionId() {
    document.cookie = cookieName + '=';
}