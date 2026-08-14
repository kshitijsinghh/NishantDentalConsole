// Static dropdown option lists, ported verbatim from Clinic Console.dc.html
// (already deduplicated there from the raw lists the clinic provided).

export const GENDERS = ['Male', 'Female', 'Others'];

export const CHIEF_COMPLAINTS = [
  'General Check-up', 'Stains / Deposits', 'Decayed Tooth', 'Dislodged Filling',
  'Dislodged Bridge', 'Dislodged Crown / Cap', 'Dislodged Crown / Cap, Dislodged Filling',
  'Loose Tooth', 'Sensitivity', 'Bleeding Gums', 'Teeth Grinding', 'Broken Tooth',
  'Food Lodgement', 'Pain', 'Pain, Swelling', 'Swelling', 'Ulcer / Burning Sensation',
  'TMJ Pain / Difficulty Opening Mouth', 'Wisdom Tooth Pain', 'Other',
];

export const TREATMENT_GROUPS = [
  'Preventive', 'Restorative', 'Prosthodontics', 'Consultation', 'Oral Surgery',
  'Endodontics', 'Pain', 'Paediatric Dentistry', 'Other', 'Implantology',
];

export const TREATMENTS = [
  'Scaling & Polishing', 'Composite Restoration', 'Bridge', 'Consultation',
  'GIC Restoration', 'Extraction', 'Irrigation', 'RCT', 'Post & Core',
  'Crown Preparation', 'Crown', 'BMP', 'Access Opening', 'Crown Recementation',
  'Obturation', 'ICM', 'Core Build-up', 'Suture Removal', 'WL',
  'Surgical Extraction', 'Bridge Removal', 'Impression', 'Night Guard Delivery',
  'Temporary Restoration', 'Other', 'Endocrown Preparation', 'Implant',
  'Crown Removal', 'Re-RCT',
];

export const TOOTH_NUMBERS = Array.from({ length: 32 }, (_, i) => String(i + 1));

export const PAYMENT_MODES = ['UPI', 'Debit Card', 'Credit Card'];
export const YES_NO = ['Yes', 'No'];
export const TREATMENT_STAGES = ['Complete', 'In Progress'];
