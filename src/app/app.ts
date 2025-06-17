import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected title = 'bootstrap-assessment-angular';

  // Tracks the currently active tab (Home, About, Contact)
  activeTab: string = 'home';

  // Array of cards with consistent layout (image, title, text, link)
  cards = [
    {
      title: 'Hotel Self Check-In/Out Kiosk',
      text: 'Self-servicing hotel check-in, check-out and walk-in guest reservation',
      image: 'https://www.mysoftinn.com/images/features/kiosk-page/softinn-kiosk.webp',
      link: 'https://www.mysoftinn.com/hotel-kiosk',
    },
    {
      title: 'Hotel Website CMS',
      text: 'User-friendly website content management system built specifically for hoteliers.',
      image: 'https://www.mysoftinn.com/images/features/content-management-system-page/1-get-to-show-the-latest-offer-promotions-min.webp',
      link: 'https://www.mysoftinn.com/hotel-website-with-cms',
    },
    {
      title: 'Hotel Channel Manager',
      text: 'Sync reservations, room rates and availability with OTAs like Booking.com and Agoda.',
      image: 'https://www.mysoftinn.com/images/features/channel-manager-page/otas.webp',
      link: 'https://www.mysoftinn.com/hotel-channel-manager',
    },
  ];

  // Contact form model values
  modalName: string = '';
  modalEmail: string = '';
  modalMessage: string = '';

  // Switch between tabs
  setTab(tab: string) {
    this.activeTab = tab;
  }

  // Handle form submission (data shown in modal)
  submitForm(name: string, email: string, message: string) {
    this.modalName = name;
    this.modalEmail = email;
    this.modalMessage = message;
  }
}
