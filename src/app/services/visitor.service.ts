import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {of} from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

const visitors = [
	{
		id: 1,
		name: "David moreno",
		company: "Facebook",
		date: '2017-09-10',
		arrived_time: '07:00',
		exit_time: ''
	},
	{
		id: 2,
		name: "Julia Martinez",
		company: "Amazon",
		date: '2017-09-10',
		arrived_time: '05:00',
		exit_time: '13:00'
	},
	{
		id: 3,
		name: "Danay Moreno",
		company: "Mongiardino",
		date: '2017-09-10',
		arrived_time: '10:00',
		exit_time: '18:00'
	},

];
@Injectable()
export class VisitorService {
	constructor(private db: AngularFirestore) {}

	public getAll(): Observable<any[]> {
		return this.db.collection('visitors').snapshotChanges()
					.pipe(map(actions => actions.map(a => {
						const data = a.payload.doc.data();
						const id = a.payload.doc.id;
						return { id, ...data };
						})
					));
	}
	public checkOut(visitor) {
		const visitorRef = this.db.doc('visitors/'+visitor.id)
		console.log(visitor);
		visitor.exit_time = new Date().toLocaleTimeString();
		visitorRef.update(visitor);
	}
	public addVisitor = (visitor) => {
		visitor.arrived_time = new Date().toLocaleTimeString();
		this.db.collection('visitors').add(visitor);
	}
}
