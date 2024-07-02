<template>
  <section>
    <div class="row wrapper">
      <div class="text-content">
        <h2>Admin Tools</h2>
        <p>
          The financial features in the admin panel enable clients to track the amount of money
          received into the restaurant's account. This functionality ensures instant control over
          the financial state and prompt response to changes. Moreover, our administrative panel
          provides visualization of financial data and figures, allowing clients to have a clearer
          understanding of turnover and profit, as well as to monitor the dynamics of changes. This
          ensures transparency in financial operations and aids in making informed decisions to
          enhance business efficiency.
        </p>
      </div>
      <div class="text-content">
        <h2>Instant Notification</h2>
        <p>
          Our restaurant mobile application sends notifications to the staff for every successful
          table reservation. This allows restaurant staff to be informed about each upcoming
          reservation and prepare for guest arrival. Notifications include reservation details such
          as date, time, and any special requests from the customer, enabling staff to provide
          high-quality service.
        </p>
      </div>
      <div class="text-content">
        <h2>Offer Selection</h2>
        <p>
          Description: Our web application for visitors allows them to conveniently browse and
          select available discounts. Visitors can explore various discount options and choose the
          one that best suits their preferences and needs. This feature enhances the overall
          experience for visitors by providing them with personalized offers and incentives to enjoy
          their dining experience at our restaurant even more.
        </p>
      </div>
      <div class="text-content">
        <h2>Table Reservation</h2>
        <p>
          This feature entails sending notifications to customers to confirm their table
          reservations at the restaurant. These notifications serve as reminders and ensure that
          customers are informed about their upcoming dining arrangements.
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ContentCase',
};
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding-block: 100px;
}
img {
  width: 100%;
}
.text-content {
  display: flex;
  justify-content: space-between;
}
.text-content h2 {
  font-size: 32px;
  font-weight: 500;
}
.text-content p {
  font-size: 18px;
  width: 680px;
}
</style>
