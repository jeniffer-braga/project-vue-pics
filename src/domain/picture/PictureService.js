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
      if (picture._id) {
         return this._resource.update({ id: picture._id }, picture); 
      } else {
         return this._resource.save(picture); 
      }
   }

   deletePicture(pictureId) {
      return this._resource.delete({ id: pictureId });
   }

   searchPicture(id) {
      return this._resource.get({ id })
         .then(res => res.json());
   }
}