import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        console.log('Hello')
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=25cd9043b0ee4ebfb82ff4a499c892b5&page=1&pageSize=20&pageSize=20'
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            articles: parsedData.articles,
            testResults: parsedData.totalResults
        })
    }

    handlepreviousCLick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=25cd9043b0ee4ebfb82ff4a499c892b5&page=${this.state.page - 1}&pageSize=20`
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }

    handleNextCLick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
        } else {
            console.log('Next')
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=25cd9043b0ee4ebfb82ff4a499c892b5&page=${this.state.page + 1}&pageSize=20`
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData)
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }
    }

    render() {
        return (
            <>
                <div className='container my-3'>
                    <h1>Headlines</h1>
                    <div className="row my-3">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4 my-3" key={element.url}>
                                <NewsItem
                                    title={element.title ? element.title.slice(0, 40) : ""}
                                    desc={element.description ? element.description.slice(0, 80) : ""}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url} />
                            </div>
                        })}
                    </div>
                    <div className='d-flex justify-content-between'>
                        <button disabled={this.state.page < 1} className="btn btn-outline-dark" onClick={this.handlepreviousCLick}>&larr; Previous</button>
                        <button className="btn btn-outline-dark" onClick={this.handleNextCLick}>Next &rarr;</button>
                    </div>
                </div>
            </>
        )
    }
}

export default News
