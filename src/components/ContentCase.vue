<template>
  <section>
    <div class="row wrapper" v-for="section in sections" :key="section.title">
      <div class="text-content">
        <h2>{{ section.title }}</h2>
        <p>{{ section.content }}</p>
      </div>
      <img :src="section.src" alt="ContentCase" />
    </div>
  </section>
</template>
<script>
import AdminToolsImg from '@/assets/content/case-1.jpg';
import InstantNotificationImg from '@/assets/content/case-2.jpg';
import OfferSelectionImg from '@/assets/content/case-3.jpg';
import TableReservationImg from '@/assets/content/case-4.jpg';

export default {
  name: 'ContentCase',
  data() {
    return {
      sections: [
        {
          title: 'Admin Tools',
          content: `The financial features in the admin panel enable clients to track the amount of money received into the restaurant's account. This functionality ensures instant control over the financial state and prompt response to changes. Moreover, our administrative panel provides visualization of financial data and figures, allowing clients to have a clearer understanding of turnover and profit, as well as to monitor the dynamics of changes. This ensures transparency in financial operations and aids in making informed decisions to enhance business efficiency.`,
          src: AdminToolsImg,
        },
        {
          title: 'Instant Notification',
          content: `Our restaurant mobile application sends notifications to the staff for every successful
          table reservation. This allows restaurant staff to be informed about each upcoming
          reservation and prepare for guest arrival. Notifications include reservation details such
          as date, time, and any special requests from the customer, enabling staff to provide
          high-quality service.`,
          src: InstantNotificationImg,
        },
        {
          title: 'Offer Selection',
          content: `Description: Our web application for visitors allows them to conveniently browse and
          select available discounts. Visitors can explore various discount options and choose the
          one that best suits their preferences and needs. This feature enhances the overall
          experience for visitors by providing them with personalized offers and incentives to enjoy
          their dining experience at our restaurant even more.`,
          src: OfferSelectionImg,
        },
        {
          title: 'Table Reservation',
          content: `This feature entails sending notifications to customers to confirm their table
          reservations at the restaurant. These notifications serve as reminders and ensure that
          customers are informed about their upcoming dining arrangements.`,
          src: TableReservationImg,
        },
      ],
    };
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 70px;
}
.wrapper:last-of-type {
  margin-bottom: 70px;
}
.text-content {
  display: flex;
}
.text-content h2 {
  font-size: 25px;
  font-weight: 500;
  letter-spacing: -1px;
}
.text-content p {
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -1px;
}

@media (width < 1024px) {
  .text-content {
    flex-direction: column;
    gap: 16px;
  }
  img {
    margin-inline: -20px;
  }
}
@media (width >= 1024px) {
  .wrapper {
    gap: 100px;
    margin-top: 100px;
  }
  .wrapper:last-of-type {
    margin-bottom: 100px;
  }
  .text-content {
    justify-content: space-between;
  }
  .text-content h2 {
    font-size: 32px;
  }
  .text-content p {
    font-size: 18px;
    max-width: 680px;
  }
}
</style>
