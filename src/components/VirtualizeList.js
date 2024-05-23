import React, { useState } from 'react'
import { FixedSizeList as List } from 'react-window';

const fetchMoreItems = (startIndex, stopIndex) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newItems = Array.from({ length: stopIndex - startIndex + 1 }, (_, index) => `Item ${startIndex + index + 1}`);
            resolve(newItems);
        }, 1000);
    });
};

const VirtualizeList = () => {

    const [items, setItems] = useState(Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`));
    const [isLoading, setIsLoading] = useState(false);

    const loadMoreItems = async (startIndex, stopIndex) => {
        setIsLoading(true);
        const newItems = await fetchMoreItems(startIndex, stopIndex);
        setItems((prevItems) => [...prevItems, ...newItems]);
        setIsLoading(false);
    };

    const isItemLoaded = (index) => !isLoading && index < items.length;

    const Row = ({ index, style }) => {
        if (!isItemLoaded(index)) {
            return <div style={style}>Loading...</div>;
        }
        return <div style={style} className="list-item">
            {items[index]}
        </div>;
    };

    return (
        <div>
            <h3 style={{ textAlign: "center" }}>VirtualizeList</h3>
            <List
                height={400}
                itemCount={items.length}
                itemSize={35}
                width={'100%'}
                onItemsRendered={({ visibleStopIndex }) => {
                    if (visibleStopIndex >= items.length - 1 && !isLoading) {
                        loadMoreItems(items.length, items.length + 19);
                    }
                }}
            >
                {Row}
            </List>
        </div>
    )
}

export default VirtualizeList
