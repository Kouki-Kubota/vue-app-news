
import { changeCategory } from "../../api/getApi";

// initial state
const state = () => ({
    newsData: {
      "sport": {},
      "business": [],
      "technology": [],
      "science": [],
      "entertainment": [],
    },
    activeCategory: "business",
    bookmarkData:[]
})

const article_id_list = {
  business: 0,
  entertainment: 20,
  technology: 40,
  sciense: 60
}

// action
const actions = {
  //activecategoryのニュースを取得
  async getArticles({commit, state}){
    const category = state.activeCategory
    if(state.newsData[category].length){
      return false
    }else{
      const new_articles = await changeCategory(category)
      const article_data = new_articles.map((article, index)=>{
        const start_index = article_id_list[category]
        article.id = index + start_index
        article.bookmark = false
        return article
      })
      console.log("article_data", article_data)
      commit('setArticles', {data: article_data, category: category})
      return new_articles
    }
  },
  //カテゴリ変更のaction
  updateCategory({commit, state}, category){
    if(state.activeCategory !== category){
      commit('setActiveCategory', category)
    }
  }
}

// mutations
const mutations = {
  //取得データを保存
  setArticles(state, data){
    const news_data = data.data
    const news_category = data.category
    state.newsData[news_category] = news_data
  },
  //選択中のカテゴリを保存
  setActiveCategory(state, category){
    state.activeCategory = category
  }
}

// getters
const getters = {
  getArticlesByCategory: (state) => {
    const category = state.activeCategory
    return state.newsData[category]
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}