import React from 'react'
import Tag from '../components/tag'
import PropTypes from 'prop-types'

const service = (props) =>{
    const {img,type,Description,tags} = props.data
    const hastTags = tags.map(hast => <Tag index={hast} tag={hast}/>)
    return (
        <div class="max-w-xs rounded overflow-hidden shadow-lg my-2 p-4">
        <img class="w-full" src={img} alt="Sunset in the mountains"/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{type}</div>
          <p class="text-grey-darker text-base">
              {Description}
          </p>
        </div>
        <div class="px-6 py-4">
         {hastTags}
        </div>
      </div>
    )
}
service.propTypes ={
  Description:PropTypes.string
}
service.defaultProps ={
  Description :"mario"
}
export default service