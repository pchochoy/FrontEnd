import { Injectable } from '@angular/core';
import {Storage, ref, uploadBytes, list, getDownloadURL} from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})


export class ImageService {
  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string){
    console.log("Estoy en this.uploadImage() de image-service para el name " + name)
    
    const file = $event.target.files[0]
    console.log(file);

    const imgRef = ref(this.storage, `imagen/`+name);
    console.log("el valor de imgRef es " + imgRef + " y su URl es " + getDownloadURL(imgRef))
    uploadBytes(imgRef, file)
    .then(response => {this.getImages(name)})
    .catch(error => console.log(error))
  }

  getImages(name:string) {
    const imagesRef = ref(this.storage, 'imagen')
    this.url = "";
    console.log("Estoy en getImagenes y el valor de imagesRef es  " + imagesRef)
    list(imagesRef)
    .then(async response => {
      for (let item of response.items) {
        if(item.name === name) {
        this.url = await getDownloadURL(item);
        console.log("La url es " + this.url);
      }
      }
    })
    .catch(error => console.log(error))
  }
}
