import m_contacts from '../mocks/contact';

import hzjbsj from '../mocks/hbsj';

export default {

    getHzhbsj (v) {
        if(this._hzsj){
            return v ? this._hzsj[v]:this._hzsj
        }else{
            let hbObj = {};
            hzjbsj.forEach((i)=>{
                hbObj[i.id] = i ;
            })
            this._hzsj = hbObj;
            return this.getHzhbsj(v);
        }


    },

    getContact (v) {
        if (this._contact) {
            return v ? this._contact[v] : this._contact;
        } else {
            let contactObj = {};
            m_contacts.forEach((v) => {
                contactObj[v.id] = v;
            });
            this._contact = contactObj;
            return this.getContact(v);
        }
    },
    setContact (k, v) {
        if (v) {
            if (this._contact)
                this._contact[k] = v;
            else {
                this._contact = {}
                this._contact[k] = v;
            }
        } else {
            this._contact = k;
        }
    },
    getUserInfo () {
        return this._userInfo;
    },
    setUserInfo (v) {
        this._userInfo = v;
    }

}
