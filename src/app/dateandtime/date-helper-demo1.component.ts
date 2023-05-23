import { Component, OnInit } from '@angular/core';
import { DateHelper } from './date-helper';

@Component({
  selector: 'date-helper-demo1',
  templateUrl: './date-helper-demo1.component.html',
  styleUrls: ['./date-helper-demo1.component.css']
})
export class DateHelperDemo1Component {

  public baseDate: Date;
	public dayDelta: number;
	public formattedDate: string;
	public hourDelta: number;
	public millisecondDelta: number;
	public minuteDelta: number;
	public monthDelta: number;
	public secondDelta: number;
	public yearDelta: number;

	private dateHelper: DateHelper;
	private dateMask: string;

	// I initialize the app component.
	constructor( dateHelper: DateHelper ) {

		this.dateHelper = dateHelper;

		this.baseDate = new Date();
		this.dayDelta = 0;
		this.hourDelta = 0;
		this.millisecondDelta = 0;
		this.minuteDelta = 0;
		this.monthDelta = 0;
		this.secondDelta = 0;
		this.yearDelta = 0;

		this.dateMask = "yyyy-MM-dd HH:mm:ss.SSS";
		this.formattedDate = "";

	}

	public ngDoCheck() : void {

		var result = this.baseDate;

		result = this.dateHelper.add( "year", this.yearDelta, result );
		result = this.dateHelper.add( "month", this.monthDelta, result );
		result = this.dateHelper.add( "day", this.dayDelta, result );
		result = this.dateHelper.add( "hour", this.hourDelta, result );
		result = this.dateHelper.add( "minute", this.minuteDelta, result );
		result = this.dateHelper.add( "second", this.secondDelta, result );
		result = this.dateHelper.add( "millisecond", this.millisecondDelta, result );

		this.formattedDate = this.dateHelper.format( result, this.dateMask );

	}
}
