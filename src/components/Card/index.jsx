import React, { useState } from 'react'
import Details from '../Details'

const Card = ({ book }) => {
  const [show, setShow] = useState(false)
  const [bookItem, setItem] = useState()

  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail
        if (thumbnail != undefined) {
          return (
            <div key={item.id}>
              <div
                className="card"
                onClick={() => {
                  setShow(true)
                  setItem(item)
                }}
              >
                <div className="p-2 w-64 h-80 rounded">
                  <img src={thumbnail} alt="" className="w-full h-full" />
                </div>

                <div className="text-sm font-semibold w-64 text-center mt-2 mb-8">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                </div>
              </div>
              <Details
                show={show}
                item={bookItem}
                onClose={() => setShow(false)}
              />
            </div>
          )
        }
      })}
    </>
  )
}

export default Card
