import { Meteor } from 'meteor/meteor';
import { callbacks } from '../../lib/callbacks';
import { addUserToRoom } from "./../../app/lib/server/functions/addUserToRoom";

Meteor.startup(() => {
  callbacks.add('afterCreateRoom', async (owner, room) => { // توجه: async
    console.log('========= Room created =========', room._id);

    const USERS_TO_ADD = ['پشتیبانی آریا تهران']; // چندتا کاربر

    for (const userId of USERS_TO_ADD) {
            addUserToRoom(room._id, userId); // await برای async
    }
 
    return room;
  }, callbacks.priority.MEDIUM, 'auto-add-user-on-create');
});
