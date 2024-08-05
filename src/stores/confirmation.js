import { defineStore } from "pinia";

export const useConfirmationStore = defineStore("counter", {
  state: () => ({
    invitations: [],
  }),
  actions: {
    saveInvitation(invite) {
      console.log(invite);
      this.invitations.push(invite);
    },
  },
});
