import React , { useState }from 'react'
var Card = () => {

  return (
    <div class="row">
        <div class="col-md-6">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 text-primary">最新案件</strong>
                    <h3 class="mb-0">資管系作業一</h3>
                    <div class="mb-2 text-muted">3月17日</div>
                    <p class="card-text mb-auto">這是一個能夠在本機環境開發的前端網站，使用SASS建構出快速的CSS環境</p>
                    <a href="#" class="stretched-link">繼續閱讀...</a>
                </div>
                <div class="col-auto d-none d-lg-block">
                    <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 text-primary">最讚案件</strong>
                    <h3 class="mb-0">資管系作業二</h3>
                    <div class="mb-2 text-muted">3月24日</div>
                    <p class="card-text mb-auto">這是一個能夠在本機環境開發的前端網站，使用Gulp在Node.js環境下開發的快速開發環境</p>
                    <a href="#" class="stretched-link">繼續閱讀...</a>
                </div>
                <div class="col-auto d-none d-lg-block">
                    <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Card