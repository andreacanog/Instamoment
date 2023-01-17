## README

# Instapound

### Background

Instapound is a clone of the social media Instagram. Users can create a post, comment on the post and like it. They can also follow other users.

#### Live Version

https://instapound.onrender.com/

### Technologies

For the frontend I used JavaScript. React and Redux were used to render components and manage state. For routes, models, and controllers I used Ruby. A rails framework tied this code to a PostgreSQL database. I used AWS S3 to render and upload pictures. For the icons I used react-icons. 

### Feautes

#### Post
Users can create, update and delete their own posts.
![](https://github.com/andreacanog/Instapound/blob/main/frontend/assets/post-instapound.gif)

#### Comments
Users can create, update and delete their own comments. Users can comment on their own post and on other users' post.
![](https://github.com/andreacanog/Instapound/blob/main/frontend/assets/comments-instapound.gif)

#### Likes
Users can like and unlike a post.
![](https://github.com/andreacanog/Instapound/blob/main/frontend/assets/likes-instagram.gif)


#### Follows
Users can follow and unfullow other users.
![](https://github.com/andreacanog/Instapound/blob/main/frontend/assets/follows-instapound.gif)


### Significant Code
Function handleling the submition of a post

```JavaScript
  const handleSubmit = async e => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('post[title]', title);

      if (photoFile) {
          formData.append('post[photo]', photoFile);
      }

      dispatch(createPost(formData));
      setTitle("");
      setPhotoFile(null);
      setPhotoUrl(null);
      setTimeout(() => {
          let modal = document.getElementById('post-create-modal');
          modal.style.display = 'none';
      }, 1000)
  }

```



### Future Features 

+ Implement a search to find users
+ Add location in your post using google maps 
+ Add fovorites. Users can see what pictures they liked it 
