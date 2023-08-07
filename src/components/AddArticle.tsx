import React, { useState, FormEvent } from "react"
import service from "../service/api"

interface Article {
  title: string
  image: string
  text: string
}

interface AddArticleProps {
  fetchArticle: () => void
}

function AddArticle({ fetchArticle }: AddArticleProps): JSX.Element {
  const [title, setTitle] = useState<string>("")
  const [image, setImage] = useState<string>("")
  const [text, setText] = useState<string>("")

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()

    const newArticle: Article = {
      title,
      image,
      text,
    }

    // Assuming 'service' is imported and defined somewhere to handle HTTP requests
    try {
      const response = await service.post<Article>("/article/", newArticle)
      if (response.ok) {
        fetchArticle()
      } else {
        // Handle error
      }
    } catch (error) {
      // Handle error
    }
  }

  return (
    <div className="add-article">
      <h2>Ajouter un article</h2>
      <p>
        Ajoutez un article en remplissant les champs ci-dessous.
        <br />
        All fields are required.
      </p>
      <br />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Inserez l'URL de l'image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Veuillez écrire l'article ici..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />{" "}
        <br />
        <div className="buttons">
          <input type="button" value="Annuler" className="#" />
          <input type="submit" value="Publier" className="#" />
        </div>
      </form>
    </div>
  )
}

export default AddArticle
