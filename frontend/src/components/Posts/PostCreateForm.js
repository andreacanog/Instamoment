import { useState } from 'react';
import { useRef } from 'react';
import './posts.css'
import {AiOutlineClose} from 'react-icons/ai';
import csrfFetch from '../../store/csrf';

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

        const response = await fetch('/api/posts', { 
            method: 'POST',
            body: formData,
            headers: {
                "X-CSRF-Token": sessionStorage.getItem("X-CSRF-Token")
            }
        });

        if (response.ok) {

            const message = await response.json();

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
                    <input className="title-container" type="text"
                        id="post-title"
                        value={title}
                        onChange={handleInput}/>
                    <input className="file-container" type="file" ref={fileRef} onChange={handleFile}/> 
                    <h3>Image preview</h3>
                        {preview}
                    <button className='create-pots-container'>Make a new post</button>
                </form>
            </div>
        </div>
    );
}


export default PostCreateForm;