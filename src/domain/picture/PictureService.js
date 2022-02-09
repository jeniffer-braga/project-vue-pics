export default class PictureService {

   constructor (resource) {
      this._resource = resource('v1/fotos{/id}');
   }

   listPictures() {
      return this._resource
         .query()
         .then(res => res.json(), err => {
            console.log(err);
            throw new Error('NÃO FOI POSSÍVEL OBTER AS IMAGENS'); 
         });
   }  

   registerPicture(picture) {
      if (picture._id) {
         return this._resource.update({ id: picture._id }, picture); 
      } else {
         return this._resource.save(picture); 
      }
   }

   deletePicture(pictureId) {
      return this._resource
         .delete({ id: pictureId })
         .then(null, err => {
            console.log(err);
            throw new Error('NÃO FOI POSSÍVEL REMOVER A IMAGEM'); 
         });
   }

   searchPicture(id) {
      return this._resource.get({ id })
         .then(res => res.json());
   }
}