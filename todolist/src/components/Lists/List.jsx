import React from 'react';
import classNames from 'classnames';
import axios from 'axios';

import{ Badge } from '../index';
import  './listMod.scss';

import removeSvg from '../../assets/img/remove.svg';

    const Lists = ({ 
        items,
        isRemovable,
        onClick,
        onRemove,
        onClickItem,
        activeItem
    }) => {
        const removeList = item => {
            if (window.confirm('Вы действительно хотите удалить список?')) {
                axios.delete(`http://localhost:3000/lists/` + item.id).then(() => {
                    onRemove(item.id);
                });
        }
    };
    
    return (
        <ul onClick={onClick} className="list">
            {items.map((item, index) => (
                <li
                    key={index} 
                    className={classNames(item.className, {
                        active: item.active
                            ? item.active
                            : activeItem && activeItem.id === item.id
                    })}
                    onClick={onClickItem ? () => onClickItem(item) : null}
                >
                    <i>
                        {item.icon ? (
                            item.icon 
                        ) : (
                            <Badge color={item.color.name} />
                        )}
                    </i>
                    <span>
                        {item.name}
                        {item.tasks && item.tasks.length > 0 && ` (${item.tasks.length})`}
                    </span>
                    {isRemovable && (
                        <img
                            className="list_remove_icon"
                            src={removeSvg}
                            alt="iconRemove"
                            onClick={() => removeList(item)}
                        />
                    )}
                </li>
            ))}
        </ul>
    );
};

export default Lists;