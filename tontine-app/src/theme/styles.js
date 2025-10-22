import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollView: {
    flex: 1,
  },

  // Onboarding
  onboardingContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  onboardingContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
  iconContainer: {
    marginBottom: 32,
  },
  largeIcon: {
    width: 128,
    height: 128,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  onboardingTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: -0.5,
  },
  onboardingSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 16,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 24,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#D1D5DB',
  },
  dotActive: {
    width: 32,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#10B981',
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingBottom: 32,
    gap: 12,
  },
  primaryButton: {
    backgroundColor: '#10B981',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  secondaryButton: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  secondaryButtonText: {
    color: '#374151',
    fontSize: 16,
    fontWeight: '500',
  },

  // Login
  loginHeader: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 32,
  },
  loginContent: {
    paddingHorizontal: 24,
  },
  loginTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  loginSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 32,
  },
  formContainer: {
    gap: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 16,
    color: '#111827',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  dividerText: {
    marginHorizontal: 16,
    fontSize: 14,
    color: '#6B7280',
  },
  biometricButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    gap: 12,
  },
  biometricButtonText: {
    color: '#374151',
    fontSize: 16,
    fontWeight: '500',
  },

  // Dashboard
  dashboardHeader: {
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 96,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  headerGreeting: {
    fontSize: 14,
    color: '#A7F3D0',
    marginBottom: 4,
  },
  headerName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    letterSpacing: -0.5,
  },
  profileButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  scoreContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  scoreLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 8,
  },
  scoreValue: {
    fontSize: 36,
    fontWeight: '600',
    color: '#111827',
    letterSpacing: -1,
  },
  scoreChange: {
    fontSize: 14,
    fontWeight: '500',
    color: '#10B981',
  },
  trophyIcon: {
    width: 64,
    height: 64,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressSection: {
    marginBottom: 12,
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  progressLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#9CA3AF',
  },
  progressLabelActive: {
    color: '#D97706',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#F3F4F6',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  scoreDetailButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  scoreDetailText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#10B981',
  },
  dashboardContent: {
    paddingHorizontal: 24,
    marginTop: -32,
    paddingBottom: 100,
  },

  // Wallet Card
  walletCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  walletContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  walletLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  walletLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  walletAmount: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
  },
  addButton: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Quick Actions
  quickActions: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 32,
  },
  actionCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  actionText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#111827',
    textAlign: 'center',
  },

  // Tontines Section
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#10B981',
  },
  tontineCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  tontineIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  tontineInfo: {
    flex: 1,
  },
  tontineName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 4,
  },
  tontineDetails: {
    fontSize: 12,
    color: '#6B7280',
  },
  tontineStatus: {
    alignItems: 'flex-end',
  },
  tontineStatusLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 2,
  },
  tontineStatusLabel2: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
    marginBottom: 2,
  },
  tontineStatusDate: {
    fontSize: 12,
    color: '#10B981',
  },
  tontineStatusDate2: {
    fontSize: 12,
    color: '#9CA3AF',
  },

  // Bottom Navigation
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingVertical: 12,
    paddingBottom: 24,
  },
  navItem: {
    alignItems: 'center',
    gap: 4,
  },
  navText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  navTextActive: {
    color: '#10B981',
    fontWeight: '500',
  },
  notificationBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
  },

  // Detail Screens
  detailHeader: {
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 32,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  backButton: {
    marginBottom: 24,
  },
  detailHeaderTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  detailHeaderSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  detailContent: {
    paddingHorizontal: 24,
    marginTop: -16,
    paddingBottom: 32,
  },

  // Cards
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },

  // Score Detail
  scoreOverviewCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  scoreCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  scoreCircleText: {
    fontSize: 30,
    fontWeight: '600',
    color: '#fff',
    letterSpacing: -1,
  },
  scoreLevelText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  scoreProgressText: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 24,
  },
  levelGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  levelItem: {
    alignItems: 'center',
  },
  levelName: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  levelNameActive: {
    color: '#D97706',
  },
  levelRange: {
    fontSize: 14,
    fontWeight: '600',
    color: '#9CA3AF',
  },
  levelRangeActive: {
    color: '#D97706',
  },

  // AI Card
  aiCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    flexDirection: 'row',
    gap: 12,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  aiIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aiContent: {
    flex: 1,
  },
  aiTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  aiText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },

  // Factors
  factorItem: {
    marginBottom: 16,
  },
  factorHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  factorLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  factorLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
  },
  factorValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#059669',
  },
  factorProgressBar: {
    height: 8,
    backgroundColor: '#F3F4F6',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 4,
  },
  factorProgressFill: {
    height: '100%',
    borderRadius: 4,
  },
  factorDetail: {
    fontSize: 12,
    color: '#6B7280',
  },

  // Chart
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 160,
    gap: 4,
  },
  chartBar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bar: {
    width: '100%',
    backgroundColor: '#D1FAE5',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    marginBottom: 8,
  },
  chartLabel: {
    fontSize: 12,
    color: '#6B7280',
  },

  // Tontine Detail
  tontineDetailHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  tontineDetailIcon: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertCard: {
    backgroundColor: '#FEF3C7',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    flexDirection: 'row',
    gap: 12,
    borderWidth: 1,
    borderColor: '#FCD34D',
  },
  alertIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#F59E0B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertContent: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  alertText: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 12,
  },
  alertLink: {
    fontSize: 14,
    fontWeight: '500',
    color: '#92400E',
  },

  // Stats Grid
  statsGrid: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  statHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
  statValue: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  statDetail: {
    fontSize: 12,
    color: '#6B7280',
  },

  // Members
  memberItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  memberLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 14,
    fontWeight: '600',
  },
  memberName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 2,
  },
  memberTurn: {
    fontSize: 12,
    color: '#10B981',
  },
  memberTurnComplete: {
    fontSize: 12,
    color: '#6B7280',
  },
  memberCheck: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#D1FAE5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  seeMoreButton: {
    paddingTop: 8,
  },
  seeMoreText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#10B981',
  },

  // Transactions
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  transactionIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  transactionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 2,
  },
  transactionDate: {
    fontSize: 12,
    color: '#6B7280',
  },
  transactionAmount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  transactionRight: {
    alignItems: 'flex-end',
  },
  transactionAmountPositive: {
    fontSize: 14,
    fontWeight: '600',
    color: '#059669',
    marginBottom: 2,
  },
  transactionAmountNegative: {
    fontSize: 14,
    fontWeight: '600',
    color: '#DC2626',
    marginBottom: 2,
  },
  transactionMethod: {
    fontSize: 12,
    color: '#6B7280',
  },
  divider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginVertical: 8,
  },

  // Action Buttons
  actionButtonsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  actionButtonSecondary: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#fff',
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  actionButtonSecondaryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
  },

  // Wallet
  walletBalanceCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 16,
    padding: 24,
    marginTop: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  walletBalanceLabel: {
    fontSize: 14,
    color: '#DBEAFE',
    marginBottom: 8,
  },
  walletBalanceAmount: {
    fontSize: 36,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 16,
    letterSpacing: -1,
  },
  walletButtonsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  walletPrimaryButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderRadius: 12,
  },
  walletPrimaryButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2563EB',
  },
  walletSecondaryButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 12,
    borderRadius: 12,
  },
  walletSecondaryButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
  },

  // Payment Methods
  paymentMethodCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
  },
  paymentMethodLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  paymentMethodIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentMethodName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 2,
  },
  paymentMethodNumber: {
    fontSize: 12,
    color: '#6B7280',
  },

  // Credit
  eligibilityCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  eligibilityContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  eligibilityLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  eligibilityAmount: {
    fontSize: 30,
    fontWeight: '600',
    color: '#111827',
    letterSpacing: -1,
  },
  eligibilityIcon: {
    width: 64,
    height: 64,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eligibilityAlert: {
    backgroundColor: '#D1FAE5',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#6EE7B7',
  },
  eligibilityAlertText: {
    fontSize: 14,
    color: '#065F46',
  },
  boldText: {
    fontWeight: '600',
  },

  // Loan Simulator
  sliderSection: {
    marginBottom: 24,
  },
  sliderLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 12,
  },
  sliderValue: {
    fontSize: 20,
    fontWeight: '600',
    color: '#F59E0B',
    textAlign: 'center',
    marginBottom: 12,
  },
  sliderTrack: {
    height: 8,
    backgroundColor: '#F3F4F6',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 12,
  },
  sliderFill: {
    height: '100%',
    backgroundColor: '#F59E0B',
    borderRadius: 4,
  },
  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sliderLabelText: {
    fontSize: 12,
    color: '#6B7280',
  },
  durationSection: {
    marginBottom: 24,
  },
  durationGrid: {
    flexDirection: 'row',
    gap: 8,
  },
  durationOption: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    alignItems: 'center',
  },
  durationOptionActive: {
    backgroundColor: '#FEF3C7',
    borderWidth: 2,
    borderColor: '#F59E0B',
  },
  durationOptionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  durationOptionTextActive: {
    fontSize: 14,
    fontWeight: '500',
    color: '#92400E',
  },
  loanSummary: {
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    gap: 12,
    marginBottom: 24,
  },
  loanSummaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loanSummaryLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  loanSummaryValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  loanSummaryTotal: {
    fontSize: 16,
    fontWeight: '600',
    color: '#F59E0B',
  },
  loanButton: {
    backgroundColor: '#F59E0B',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#F59E0B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  loanButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },

  // Benefits
  benefitsCard: {
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  benefitsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  benefitItem: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  benefitIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  benefitContent: {
    flex: 1,
  },
  benefitTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 2,
  },
  benefitText: {
    fontSize: 12,
    color: '#6B7280',
  },

  // Notifications
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 24,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  notificationHeaderTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
    letterSpacing: -0.5,
  },
  markReadText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#10B981',
  },
  notificationContent: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    gap: 12,
  },
  notificationCard: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  notificationCardNew: {
    backgroundColor: '#D1FAE5',
    borderColor: '#6EE7B7',
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationBody: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  notificationText: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 8,
    lineHeight: 20,
  },
  notificationTime: {
    fontSize: 12,
    color: '#6B7280',
  },

  // Profile
  profileHeader: {
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 96,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  profileInfo: {
    alignItems: 'center',
  },
  profileAvatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  profileAvatarText: {
    fontSize: 30,
    fontWeight: '600',
    color: '#059669',
  },
  profileName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  profilePhone: {
    fontSize: 14,
    color: '#A7F3D0',
    marginBottom: 16,
  },
  profileBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  profileBadgeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  profileContent: {
    paddingHorizontal: 24,
    marginTop: -64,
    paddingBottom: 32,
  },
  profileStats: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  profileStatItem: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  profileStatValue: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  profileStatLabel: {
    fontSize: 12,
    color: '#6B7280',
  },

  // Menu
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItemText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
  },
  menuItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  menuItemValue: {
    fontSize: 14,
    color: '#6B7280',
  },
  menuDivider: {
    height: 1,
    backgroundColor: '#F3F4F6',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#fff',
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginTop: 16,
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#DC2626',
  },
  versionText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#6B7280',
    marginTop: 24,
  },
});