import React, { useEffect } from 'react'
import NavLayout from '../components/layouts/NavLayout'
import { usePage } from './usePage'
import Home from '../components/home/Home'
import { fetchArticle, fetchArticleManifest } from '../network/articleClient'

const HomePage = () => {
  useEffect(() => {
    // fetch('https://raw.githubusercontent.com/miketabb33/michaels-articles/master/articles/oauth.md')
    //   .then((res) => res.text().then((r) => console.log(r)))
    //   .catch((err) => console.log(err))
    fetchArticleManifest()
      .then((res) => {
        console.log(res)
        fetchArticle(res[0].path)
          .then((r) => console.log(r))
          .catch((e) => console.log(e))
      })
      .catch((err) => console.log(err))
  })
  usePage({ title: 'Home' })
  return (
    <NavLayout>
      <Home />
    </NavLayout>
  )
}

export default HomePage
