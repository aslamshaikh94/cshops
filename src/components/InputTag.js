import React, { Component } from 'react'
import styled from 'styled-components';

const TitleTags = styled.div`  

.tags-input {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding:5px 8px;
    border: 1px solid rgb(214, 216, 218);
    border-radius: 6px;
    background:#fff;
    font-size: 12px;
    &:focus-within {
        border: 1px solid #0052cc;
    }
    input {
        flex: 1;
        border: none;
        &:focus {
            outline: transparent;
        }
    }
}

#tags {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
}

.tag {
    width: auto;    
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 2px 10px;    
    list-style: none;
    border-radius: 6px;
    margin: 2px 2px;
    background: #004c8a;    
    .tag-close-icon {
        display: block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        font-size: 14px;
        margin-left: 8px;
        color: #0052cc;
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
    }
}

  @media screen and (max-width: 567px) {
      .tags-input {
          width: calc(100vw - 32px);
      }
  }
`;

const TagsInput = (props) => {
    const [tags, setTags] = React.useState([]);

    const removeTags = indexToRemove => {
        setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    };
    const addTags = event => {
        if (event.target.value !== "") {
            setTags([...tags, event.target.value]);
            props.selectedTags([...tags, event.target.value]);
            event.target.value = "";
        }
    };
    return (
      <TitleTags>
        <div className="tags-input">
            <ul id="tags">
                {tags? tags.map((tag, index) => (
                    <li key={index} className="tag">
                        <span className='tag-title'>{tag}</span>
                        <span className='tag-close-icon'
                            onClick={() => removeTags(index)}
                        >
                            x
                        </span>
                    </li>
                )) : null}
            </ul>
            <input
                type="text"
                onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
                placeholder={props.placeholder}
            />
        </div>
      </TitleTags>
    );
};


export default TagsInput
