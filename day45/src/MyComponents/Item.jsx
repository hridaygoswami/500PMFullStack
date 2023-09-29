import React, { useState } from 'react'

export default function Item({title, price, size, img}) {
    const [count, setCount] = useState(1)

    return (
    <>
          <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
              <div class="mr-1"><img class="rounded" src={img} width="70" /></div>
              <div class="d-flex flex-column align-items-center product-details"><span class="font-weight-bold">{title}</span>
                  <div class="d-flex flex-row product-desc">
                      <div class="size mr-1"><span class="text-grey">Size:</span><span class="font-weight-bold">&nbsp;{size}</span>
                      </div>
                      <div class="color"><span class="text-grey">Color:</span><span class="font-weight-bold">&nbsp;Grey</span>
                      </div>
                  </div>
              </div>
              <div class="d-flex flex-row align-items-center qty"><button class="fa fa-minus text-danger"></button>
                  <h5 class="text-grey mt-1 mr-1 ml-1">{count}</h5><button class="fa fa-plus text-success"></button>
              </div>
              <div>
                  <h5 class="text-grey">${price}</h5>
              </div>
              <div class="d-flex align-items-center"><i class="fa fa-trash mb-1 text-danger"></i></div>
          </div>
    </>
  )
}
