import './Book.css'

const Book = ({title, image, price, isbn, author, gender}) => {
    return (
        <div className='book'>
            <div className='image-container'>
                <img src={image} alt={title} />
            </div>
            <div className='conteudo'>
                <p className='title'>
                    <strong>{title}</strong>
                </p>
                <p className='gender'>
                    {gender}
                </p>
                <p className='author'>
                    {author}
                </p>
                <p className='isbn'>
                    {isbn}
                </p>
                <p className='price'>
                    R$ <strong>{price}</strong>
                </p>
            </div>
        </div>
    )
}

export default Book