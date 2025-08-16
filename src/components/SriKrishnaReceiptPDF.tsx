// src/components/SriKrishnaReceiptPDF.tsx
import React from "react";
import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 0, backgroundColor: "#fff" },
  borderContainer: {
    flexGrow: 1,
    margin: 42,
    borderWidth: 2,
    borderColor: "#111",
    borderRadius: 8,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 28,
    paddingRight: 28,
    backgroundColor: "#fff",
  },
  headerImage: {
    width: 460,
    height: 120,
    objectFit: "contain",
    alignSelf: "center",
    marginTop: 0,
    marginBottom: 0,
  },
  shopDetails: {
    color: "#111",
    fontSize: 10,
    textAlign: "center",
    marginBottom: 4,
    letterSpacing: 1,
  },
  billToBox: {
    alignItems: "flex-end",
    marginTop: 0,
    marginBottom: 1,
    fontSize: 10,
    fontWeight: "bold",
  },
  billToLinesContainer: {
    alignItems: "flex-end",
    marginBottom: 4,
  },
  dateText: {
    fontSize: 10,
    color: "#111",
    textAlign: "right",
    marginBottom: 4,
    fontWeight: "bold",
  },
  billToLine: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 1,
  },
  billToPhoneRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 0,
    marginBottom: 4,
  },
  billToLabel: {
    color: "#111",
    fontWeight: "bold",
    marginRight: 3,
    fontSize: 10,
  },
  billToValue: {
    fontWeight: "bold",
    fontSize: 10,
    color: "#111",
  },
  billToRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 1,
  },
  billToText: {
    color: "#111",
    marginBottom: 0,
    fontSize: 10,
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1.5,
    borderBottomColor: "#bbb",
    backgroundColor: "#f2f2f2",
    paddingVertical: 8,
    fontWeight: "bold",
    fontSize: 9,
    color: "#111",
    marginTop: 7,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    paddingVertical: 8,
    fontSize: 9,
    color: "#111",
  },
  cellSNo: { width: "8%", textAlign: "center", color: "#111" },
  cellProduct: { width: "32%", textAlign: "left", paddingLeft: 8, color: "#111" },
  cellPrice: { width: "12%", textAlign: "right", color: "#111" },
  cellQty: { width: "12%", textAlign: "right", color: "#111" },
  cellTotal: { width: "18%", textAlign: "right", paddingRight: 8, color: "#111" },
  cellDiscountPrice: { width: "18%", textAlign: "right", paddingRight: 8, color: "#111" },
  totalsBlock: {
    alignItems: "flex-end",
    marginTop: 24,
    marginRight: 8,
  },
  totalsRow: {
    flexDirection: "row",
    gap: 15,
    marginTop: 4, // normal small gap
    fontSize: 9,
    color: "#111",
  },
  // NEW style for Total row with extra spacing
  totalRow: {
    flexDirection: "row",
    gap: 15,
    marginTop: 3,
    marginBottom: 3, // bigger gap before total
    fontSize: 9,
    color: "#111",
  },
  totalsLabel: { fontWeight: "bold", fontSize: 9, color: "#111" },
  totalsValue: { fontSize: 9, fontWeight: "bold", color: "#111" },
  grandTotal: { fontSize: 9, color: "#111", fontWeight: "bold", marginTop: 0 },
});

export const SriKrishnaReceiptPDF = ({ customer, items, subtotal, total, date }) => {
  const discountAmt = subtotal * 0.8;
  const roundedSubtotal = subtotal.toFixed(2);
  const roundedTotal = total.toFixed(2);

  const firstPageLimit = 20;
  const subsequentPageLimit = 26;

  const firstPageItems = items.slice(0, firstPageLimit);
  const remainingItems = items.slice(firstPageLimit);

  const subsequentPagesItems = [];
  for (let i = 0; i < remainingItems.length; i += subsequentPageLimit) {
    subsequentPagesItems.push(remainingItems.slice(i, i + subsequentPageLimit));
  }

  const renderRows = (rows, startIndex = 0) =>
    rows.map((item, idx) => (
      <View key={startIndex + idx} style={styles.tableRow}>
        <Text style={styles.cellSNo}>{startIndex + idx + 1}</Text>
        <Text style={styles.cellProduct}>{item.name}</Text>
        <Text style={styles.cellPrice}>{item.price.toLocaleString("en-IN")}</Text>
        <Text style={styles.cellQty}>{item.quantity}</Text>
        <Text style={styles.cellTotal}>
          {(item.price * item.quantity).toLocaleString("en-IN")}
        </Text>
        <Text style={styles.cellDiscountPrice}>
          {(item.discountedPrice * item.quantity).toLocaleString("en-IN")}
        </Text>
      </View>
    ));

  const allFitOnFirstPage = items.length <= firstPageLimit;

  return (
    <Document>
      {/* First Page */}
      <Page size="A4" style={styles.page}>
        <View style={styles.borderContainer}>
          <Image src="https://ikrytonian.sirv.com/headimage.png" style={styles.headerImage} />
          <Text style={styles.shopDetails}></Text>
          <View style={styles.billToBox}>
            <Text style={styles.dateText}>Date: {date}</Text>
            <View style={styles.billToLinesContainer}>
              <View style={styles.billToRow}>
                <Text style={styles.billToLabel}>Bill To:</Text>
                <Text style={[styles.billToValue, styles.billToLine]}>{customer.name}</Text>
              </View>
              <Text style={styles.billToLine}>{customer.address}</Text>
              <Text style={styles.billToLine}>
                {customer.city}, {customer.state}, {customer.pincode}
              </Text>
            </View>
            <View style={styles.billToPhoneRow}>
              <Text style={styles.billToLabel}>Phone:</Text>
              <Text style={styles.billToValue}>{customer.phone}</Text>
            </View>
          </View>
          <View style={styles.tableHeader}>
            <Text style={styles.cellSNo}>S.No</Text>
            <Text style={styles.cellProduct}>Product</Text>
            <Text style={styles.cellPrice}>Price</Text>
            <Text style={styles.cellQty}>Quantity</Text>
            <Text style={styles.cellTotal}>Total</Text>
            <Text style={styles.cellDiscountPrice}>Discount Price</Text>
          </View>
          {renderRows(firstPageItems, 0)}

          {/* Totals if all fit on first page */}
          {subsequentPagesItems.length === 0 && (
            <View style={styles.totalsBlock}>
              <View style={styles.totalsRow}>
                <Text style={styles.totalsLabel}>Subtotal:</Text>
                <Text style={styles.totalsValue}>{roundedSubtotal}</Text>
              </View>
              <View style={styles.totalsRow}>
                <Text style={styles.totalsLabel}>Discount (80%):</Text>
                <Text style={styles.totalsValue}>-{discountAmt.toFixed(2)}</Text>
              </View>
              <View style={styles.totalRow}>
                <Text style={styles.grandTotal}>Total:</Text>
                <Text style={styles.grandTotal}>{roundedTotal}</Text>
              </View>
            </View>
          )}
        </View>
      </Page>

      {/* Additional pages */}
      {subsequentPagesItems.map((pageItems, pageIndex) => {
        const isLastSubPage = pageIndex === subsequentPagesItems.length - 1;
        const totalsFit = isLastSubPage && pageItems.length < subsequentPageLimit;

        return (
          <Page key={pageIndex} size="A4" style={styles.page}>
            <View style={styles.borderContainer}>
              <View style={styles.tableHeader}>
                <Text style={styles.cellSNo}>S.No</Text>
                <Text style={styles.cellProduct}>Product</Text>
                <Text style={styles.cellPrice}>Price</Text>
                <Text style={styles.cellQty}>Quantity</Text>
                <Text style={styles.cellTotal}>Total</Text>
                <Text style={styles.cellDiscountPrice}>Discount Price</Text>
              </View>
              {renderRows(pageItems, firstPageLimit + pageIndex * subsequentPageLimit)}

              {totalsFit && (
                <View style={styles.totalsBlock}>
                  <View style={styles.totalsRow}>
                    <Text style={styles.totalsLabel}>Subtotal:</Text>
                    <Text style={styles.totalsValue}>{roundedSubtotal}</Text>
                  </View>
                  <View style={styles.totalsRow}>
                    <Text style={styles.totalsLabel}>Discount Applied : </Text>
                    <Text style={styles.totalsValue}>-{discountAmt.toFixed(2)}</Text>
                  </View>
                  <View style={styles.totalRow}>
                    <Text style={styles.grandTotal}>Total:</Text>
                    <Text style={styles.grandTotal}>{roundedTotal}</Text>
                  </View>
                </View>
              )}
            </View>
          </Page>
        );
      })}

      {/* Totals-only page if last page is full */}
      {subsequentPagesItems.length > 0 &&
        subsequentPagesItems[subsequentPagesItems.length - 1].length === subsequentPageLimit && (
          <Page size="A4" style={styles.page}>
            <View style={styles.borderContainer}>
              <View style={styles.totalsBlock}>
                <View style={styles.totalsRow}>
                  <Text style={styles.totalsLabel}>Subtotal:</Text>
                  <Text style={styles.totalsValue}>{roundedSubtotal}</Text>
                </View>
                <View style={styles.totalsRow}>
                  <Text style={styles.totalsLabel}>Discount (80%):</Text>
                  <Text style={styles.totalsValue}>-{discountAmt.toFixed(2)}</Text>
                </View>
                <View style={styles.totalRow}>
                  <Text style={styles.grandTotal}>Total:</Text>
                  <Text style={styles.grandTotal}>{roundedTotal}</Text>
                </View>
              </View>
            </View>
          </Page>
        )}
    </Document>
  );
};
