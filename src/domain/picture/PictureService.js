export default class PictureService {

   constructor (resource) {
      this._resource = resource('v1/fotos{/id}');
   }

   listPictures() {
      return this._resource
         .query()
         .then(res => res.json());
   }  

   registerPicture(picture) {
      return this._resource.save(picture); 
   }

   deletePicture(pictureId) {
      return this._resource.delete({ id: pictureId });
   }
}