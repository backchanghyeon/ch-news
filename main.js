let naws = []
const getLatestNews = async() =>{
    let url = new URL(
        'https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=10'
    ); 
    let header = new Headers({
        'x-api-key' : 'aLvqocSgxME6U2ed5u_cFpw9-Z_ZN1OhKkGK6G99Oqo',
    });

    let response = await fetch(url,{headers:header}); 
    let date = await response.json();
    news = date.articles
    console.log(news);
};

getLatestNews();