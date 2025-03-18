/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from '../../APIs/PhotoService';

type imageItem = {
    itemImageSrc: string;
    alt: string
}

export function SlideShow() {
    const [images, setImages] = useState<imageItem[]>([]);

    useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item: imageItem) => {
        return <img src={item?.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    return (
        <div className="card p-4">
            <Galleria value={images} style={{ maxWidth: '640px' }} showThumbnails={false} showIndicators item={itemTemplate} />
        </div>
    )
}