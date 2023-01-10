import { useState } from 'react';
import { useRef } from 'react';
import './posts.css'
import {AiOutlineClose} from 'react-icons/ai';

function PostCreateForm () {
    const [title, setTitle] = useState ("");
    const [photoFile, setPhotoFile] = useState (null);
    const [photoUrl, setPhotoUrl] = useState (null);

    const handleInput = e => {
        setTitle(e.currentTarget.value);
    }

    const handleSubmit = async e => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('post[title]', title);

        if (photoFile) {
            formData.append('post[photo]', photoFile);
        }

        const response = await fetch('/api/posts', { // csrfFetch
            method: 'POST',
            body: formData
        });

        if (response.ok) {

            const message = await response.json();
            console.log(message.message);

            setTitle("");
            setPhotoFile(null);
            setPhotoUrl(null);
        }
    }

    const fileRef = useRef(null);

    const handleFile = e => {
        const file = e.currentTarget.files[0];

        if (file) {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            setPhotoFile(file);
            setPhotoUrl(fileReader.result);
          };
        }
    }

    const preview = photoUrl ? <img src={photoUrl} alt="" height="200" /> : null;
   
    const closeModal = (e) => {
        e.preventDefault();
        let modal = document.getElementById('post-create-modal');
        modal.style.display = 'none';
    }

    return (
        <div className='post-create-form-container' id='post-create-modal'>
            <div className='modal-close-button-container'>
                <button onClick={closeModal}><AiOutlineClose/></button>
            </div>
            <div className='post-create-modal-content'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="post-title">Title of Post</label>
                    <input type="text"
                        id="post-title"
                        value={title}
                        onChange={handleInput}/>
                    <input type="file" ref={fileRef} onChange={handleFile}/> 
                    <h3>Image preview</h3>
                        {preview}
                    <button>Make a new Post!</button>
                </form>
            </div>
        </div>
    );
}


export default PostCreateForm;