import {Component, Input, Inject} from '@angular/core'

@Component({
    selector: 'delete-dialog',
    template: `<div id="modal1" class="modal">
    <div class="modal-content center-align">
      <h4>Are you sure what you want to delete this Post?</h4>
    </div>
    <div class="modal-footer">
      <a 
        (click)="deletePost()"
        class="modal-action modal-close waves-effect waves-green btn-flat">Yes</a>
    <a 
        class="modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
    </div>
  </div>`,
})

export class DeleteDialog{
  @Input() postData: any;
  
  constructor(@Inject('data') public data){}

  deletePost(){
    let id = this.data.indexOf(this.data.find(
      item => item._id == this.postData.id));

    this.data.splice(id, 1);
  }
}
